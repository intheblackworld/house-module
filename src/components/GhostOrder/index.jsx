import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
  Form, Checkbox, Button, Select, TextArea,
} from 'semantic-ui-react'

import cx from 'classnames'
import SweetAlert from 'sweetalert2-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import PolicyDialog from 'components/PolicyDialog'

import info from '../../info'
import { isMobile } from '../../utils'
import { cityList, renderAreaList } from './address'
import css from './cht.scss'

const GhostOrder = ({ show, noTitle }) => {
  // 從網址接收 utm 資料
  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source')
  const utmMedium = urlParams.get('utm_medium')
  const utmContent = urlParams.get('utm_content')
  const utmCampaign = urlParams.get('utm_campaign')
  const [utm_source] = useState(utmSource || '')
  const [utm_medium] = useState(utmMedium || '')
  const [utm_content] = useState(utmContent || '')
  const [utm_campaign] = useState(utmCampaign || '')

  // 選擇居住
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [areas, setAreas] = useState([])
  useEffect(() => {
    setAreas(renderAreaList(city))
    setArea('')
  }, [city])

  // 是否同意個資聲明
  const [isCheck, check] = useState(false)
  const submitClassName = cx(css.submit, {
    [css.enable]: isCheck,
    [css.show]: show,
    [css.hide]: !show,
  })

  const [isLoading, setLoading] = useState(false)

  // 彈窗
  const [isShow, toggleDialog] = useState(false)
  const showDialog = () => {
    toggleDialog(!isShow)
  }
  const closeDialog = () => {
    toggleDialog(false)
  }
  const closeClass = cx(css.close, {
    [css.show]: isShow,
  })

  // 表單驗證
  const [alert, triggerAlert] = useState(false)
  const submitForm = () => {
    if (isLoading) return
    setLoading(true)
    if (!isCheck) {
      setLoading(false)
      return
    }
    if (
      !document.getElementById('name').value
      || !document.getElementById('phone').value
      || !document.getElementById('email').value
      || !city
      || !area
    ) {
      setLoading(false)
      triggerAlert(true)
      return
    }
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const msg = document.getElementById('msg').value

    const formData = new FormData()
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('msg', msg)
    formData.append('city', city)
    formData.append('area', area)
    formData.append('utm_source', utm_source)
    formData.append('utm_medium', utm_medium)
    formData.append('utm_content', utm_content)
    formData.append('utm_campaign', utm_campaign)
    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
    fetch(
      `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${name}&phone=${phone}&email=${email}&cityarea=${city}${area}&msg=${msg}&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_content=${utm_content}&utm_campaign=${utm_campaign}&date=${date}&campaign_name=${info.caseName}
      `,
      {
        method: 'GET',
      },
    )

    fetch('contact-form.php', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        window.location.href = 'formThanks'
      }
    })
    // .then((response) => {
    //   if (response.status === 200) {
    //     window.location.href = 'formThanks'
    //   }
    // })
    // .then((myJson) => {
    //   console.log(myJson)
    // })
    // .catch(error => console.error('Error', error))
    // console.log(reqData)
    // console.log(utm_source)
    // window.location.href = 'formThanks'
  }

  const titleClass = cx(css.orderTitle, {
    [css.show]: show,
    [css.hide]: !show,
  })

  const formClass = cx(css.form, {
    [css.show]: show,
    [css.hide]: !show,
  })

  const checkboxClass = cx(css.checkbox, {
    [css.show]: show,
    [css.hide]: !show,
  })

  // 嘗試解決客戶反應問題：點擊輸入框或選項框，鍵盤跳出後表單不見，畫面往上跳或被切掉
  useLayoutEffect(() => {
    if (isMobile) {
      document.getElementById('orderBg').style.height = `${window.screen.availHeight}px`;
    }
  })

  return (
    <div className={css.orderContainer}>
      {!noTitle && (
        <div className={titleClass}>
          <h3>預約賞屋</h3>
          <p>專人將在24小時內與您聯繫</p>
        </div>
      )}
      <Form className={formClass}>
        <div className={css.group}>
          <div className={css.control}>
            <Form.Field className={css.field}>
              <input id="name" placeholder="" required />
              <label>姓名</label> {/* eslint-disable-line */}
            </Form.Field>
          </div>
          <div className={css.control}>
            <Form.Field className={css.field}>
              <input id="phone" placeholder="" required />
              <label>聯絡電話</label> {/* eslint-disable-line */}
            </Form.Field>
          </div>
          <div className={css.control}>
            <Form.Field className={css.field}>
              <input id="email" placeholder="" required />
              <label>email</label> {/* eslint-disable-line */}
            </Form.Field>
          </div>
          <div className={css.selectControl}>
            <Form.Field className={css.field}>
              <Select
                id="city"
                className={css.select}
                placeholder="請選擇居住城市"
                options={cityList}
                onChange={(e, { value }) => setCity(value)}
              />
            </Form.Field>
            <Form.Field className={css.field}>
              <Select
                id="area"
                className={css.select}
                placeholder="請選擇居住地區"
                options={areas}
                onChange={(e, { value }) => setArea(value)}
              />
            </Form.Field>
          </div>
        </div>
        <div className={css.group}>
          <div className={css.control}>
            <TextArea id="msg" className={css.textarea} placeholder="您的訊息" />
          </div>
        </div>
      </Form>
      <Form.Field className={checkboxClass}>
        <Checkbox
          onChange={(e, { checked }) => check(checked)}
          label={(
            <label>
              本人知悉並同意
              <a onClick={showDialog} onKeyDown={showDialog}>
                「個資告知事項聲明」
              </a>
              內容
            </label>
)}
        />
      </Form.Field>
      <PolicyDialog show={isShow} />
      <div className={closeClass} onClick={closeDialog} onKeyDown={closeDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <SweetAlert
        show={alert}
        type="error"
        title=""
        text="「姓名、手機、 E-mail、居住城市、居住地區」
        是必填欄位"
        confirmButtonText="我知道了"
        confirmButtonColor="#e5d48f"
        onConfirm={() => triggerAlert(false)}
      />
      <Button className={submitClassName} onClick={submitForm}>
        立即預約
      </Button>
    </div>
  )
}

export default GhostOrder
