import React from 'react'
import {
  Form, Checkbox, Button, Select, TextArea,
} from 'semantic-ui-react'
import css from './index.scss'

const Order = () => (
  <div className={css.orderContainer}>
    <div className={css.orderTitle}>
      <h3>預約賞屋</h3>
      <p>買得起，住更好</p>
    </div>
    <Form className={css.form}>
      <div className={css.group}>
        <div className={css.control}>
          <label>姓名</label> {/* eslint-disable-line */}
          <Form.Field className={css.field}>
            <input placeholder="" />
          </Form.Field>
        </div>
        <div className={css.control}>
          <label>手機</label> {/* eslint-disable-line */}
          <Form.Field className={css.field}>
            <input placeholder="" />
          </Form.Field>
        </div>
        <div className={css.control}>
          <label>E-mail</label> {/* eslint-disable-line */}
          <Form.Field className={css.field}>
            <input placeholder="" />
          </Form.Field>
        </div>
        <div className={css.control}>
          <label>居住城市</label> {/* eslint-disable-line */}
          <Form.Field className={css.field}>
            <Select
              className={css.select}
              placeholder="請選擇"
              options={[
                {
                  key: 'af',
                  value: 'af',
                  flag: 'af',
                  text: 'Afghanistan',
                },
              ]}
            />
          </Form.Field>
        </div>
        <div className={css.control}>
          <label>居住地區</label> {/* eslint-disable-line */}
          <Form.Field className={css.field}>
            <Select
              className={css.select}
              placeholder="請選擇"
              options={[
                {
                  key: 'af',
                  value: 'af',
                  flag: 'af',
                  text: 'Afghanistan',
                },
              ]}
            />
          </Form.Field>
        </div>
      </div>
      <div className={css.group}>
        <div className={css.control}>
          <TextArea className={css.textarea} placeholder="請輸入您的留言" />
        </div>
      </div>
    </Form>
    <Form.Field className={css.checkbox}>
      <Checkbox
        label={(
          <label>{/* eslint-disable-line */} {/* eslint-disable-line */} {/* eslint-disable-line */}
            本人知悉並同意<a>「個資告知事項聲明」</a>內容 {/* eslint-disable-line */}
          </label>
)}
      />
    </Form.Field>
    <Button className={css.submit}>立即預約</Button>`
  </div>
)

export default Order
