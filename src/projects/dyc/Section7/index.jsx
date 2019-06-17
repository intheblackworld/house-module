import { Fragment } from 'react';
import { withTrans } from 'utils';
import ViewPort from 'components/ViewPort';
import Carousel from 'components/Carousel';
import { isMobile } from '../../../utils';
import c from './index.scss';

const Top = ({ show }) => {
  const topClass = withTrans('top', c, show);
  return (
    <div className={topClass}>
      <h3 className={c.label}>【建築安全履歷】</h3>
      <h3 className={c.title}>
        Alfa Safe系統工法
        <br />
        建築結構界的Apple
      </h3>
      <p className={c.desc}>
        台灣屬地震帶，地震頻傳使台灣建築結構備受考驗，
        「德友藏」採用經國家地震實驗中心測試耐震效果顯著提升的Alfa Safe結構安全系統工法，
        是土城首座以Alfa Safe柱中柱、系統柱及系統牆施作的建築結構，
        抗震韌性可提升近1倍，除了鋼筋、樑、柱外，連管線的部份都有詳細紀錄，
        透明公開，時間是建築最完美的見證。
      </p>
      <img src={require('./resume.png')} className={c.resume} alt="東城大境的圖片" />
    </div>
  );
};

const List = () => (
  <Fragment>
    <div className={c.item}>
      <div className={c.frame}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>
            系統規則化
            <br />
            SYSTEM
          </h3>
          <p className={c.contentDesc}>
            鋼筋連續不間斷彎紮一體成型，且在工廠加工製作成配件化，結構耐震大幅提升，安全品質看得見。
          </p>
        </div>
      </div>
    </div>
    <div className={c.item}>
      <div className={c.frame}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>
            規格標準化
            <br />
            STANDARD
          </h3>
          <p className={c.contentDesc}>
            鋼筋加工尺寸都先經過嚴密規劃、裁切和彎折，成為配件化的組件，標準綁紮看得見。
          </p>
        </div>
      </div>
    </div>
    <div className={c.item}>
      <div className={c.frame}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>
            防呆配件化
            <br />
            SIMPLE
          </h3>
          <p className={c.contentDesc}>
            避免因人為疏忽和工人素質參差不齊產生的施工品質缺失，使綁紮更加容易和精準，施工簡單看得見。
          </p>
        </div>
      </div>
    </div>
    <div className={c.item}>
      <div className={c.frame}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>
            作業效率化
            <br />
            SPEED
          </h3>
          <p className={c.contentDesc}>
            以完備前置規畫作業，工廠鋼筋配件式加工成型替代工地現場困難的綁紮作業，工作效率看得見。
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

const Container = ({ show }) => {
  const containerClass = withTrans('container', c, show);
  return (
    <div className={containerClass}>
      {isMobile ? (
        <Carousel
          slidesToShow={1}
          fade={false}
          dots
          arrows
          // afterChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
        >
          <div className={c.item}>
            <div className={c.frame}>
              <div className={c.content} style={{ background: '#9eafd0' }}>
                <h3 className={c.contentTitle}>
                  系統規則化
                  <br />
                  SYSTEM
                </h3>
                <p className={c.contentDesc}>
                  鋼筋連續不間斷彎紮一體成型，且在工廠加工製作成配件化，結構耐震大幅提升，安全品質看得見。
                </p>
              </div>
            </div>
          </div>
          <div className={c.item}>
            <div className={c.frame}>
              <div className={c.content} style={{ background: '#7d8fb4' }}>
                <h3 className={c.contentTitle}>
                  規格標準化
                  <br />
                  STANDARD
                </h3>
                <p className={c.contentDesc}>
                  鋼筋加工尺寸都先經過嚴密規劃、裁切和彎折，成為配件化的組件，標準綁紮看得見。
                </p>
              </div>
            </div>
          </div>
          <div className={c.item}>
            <div className={c.frame}>
              <div className={c.content} style={{ background: '#596c92' }}>
                <h3 className={c.contentTitle}>
                  防呆配件化
                  <br />
                  SIMPLE
                </h3>
                <p className={c.contentDesc}>
                  避免因人為疏忽和工人素質參差不齊產生的施工品質缺失，使綁紮更加容易和精準，施工簡單看得見。
                </p>
              </div>
            </div>
          </div>
          <div className={c.item}>
            <div className={c.frame}>
              <div className={c.content} style={{ background: '#2d436e' }}>
                <h3 className={c.contentTitle}>
                  作業效率化
                  <br />
                  SPEED
                </h3>
                <p className={c.contentDesc}>
                  以完備前置規畫作業，工廠鋼筋配件式加工成型替代工地現場困難的綁紮作業，工作效率看得見。
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      ) : (
        <List />
      )}
    </div>
  );
};
const Section7 = () => (
  <div className={c.bg}>
    <ViewPort isBottom={false}>
      <Top />
    </ViewPort>
    <ViewPort isBottom={false}>
      <Container />
    </ViewPort>
  </div>
);

export default Section7;
