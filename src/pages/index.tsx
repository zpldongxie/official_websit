import { Carousel, FloatButton } from 'antd';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

const goRegister = type => {
  const host = window.location.host;
  const start = host.indexOf('.');
  let registerUrl: string;
  if (start > 0) {
    var baseHost = host.substring(host.indexOf('.'), host.length);
    registerUrl = 'http://customer-management' + baseHost + '/register?type=' + type;
  } else {
    registerUrl = 'http://customer-management.test.xingjiaoyun.com/register?type=' + type;
  }
  window.open(registerUrl);
};

function HomepageHeader() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Carousel autoplay>
      <div>
        <img src='img/banner1.jpg' />
      </div>
      <div>
        <img src='img/banner2.jpg' />
      </div>
      <div>
        <img src='img/banner3.jpg' />
      </div>
    </Carousel>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title='教育平台' description='基于教育数字化转型背景下精心设计的新生态“互联网+教育”大平台'>
      <HomepageHeader />
      <div className={styles.briefIntroduction}>
        <h1>兴教云——兼顾局校一体化和单校智慧校园的SaaS平台+应用生态综合解决方案</h1>
        <p style={{ textIndent: '2em;' }}>
          兴教云是基于教育数字化转型背景下精心设计的新生态“互联网+教育”大平台，将先进成熟的基础支撑能力和经过验证的应用生态产品有机融合，可灵活定制出“区域智慧教育云”、“智慧校园”等兼顾局-校多级联动和集团校/单校独立运行的智慧教育/智慧校园新生态平台和教育行业核心业务数字化转型支撑平台，教育管理、教学教研、智慧作业、精准测评、课后服务等全方位功能可根据需求量体裁衣，既可被集成到已有第三方智慧教育/智慧校园平台，亦可基于本平台自带的开放平台集成第三方智慧教育/智慧校园平台全部或部分功能，共同构建一站式教育治理与教育应用新格局，助推教育高质量发展。
        </p>
        <div className={styles.wrap}>
          <div className={styles.box}>
            <img src='img/information.png' alt='' />
            <p>局校一体</p>
            <p>
              既可面向各级教育局构建区域智慧教育平台，也可面向学校构建学校智慧校园平台，区域平台中也可自助构建区域内学校智慧校园平台
            </p>
          </div>
          <div className={styles.box}>
            <img src='img/identity.png' alt='' />
            <p>统一身份认证</p>
            <p>统一认证体系，兼容企业微信、钉钉等超级平台组织架构，用户信息更安全，应用下发更方便，权限控制更准确 </p>
          </div>
          <div className={styles.box}>
            <img src='img/portal.png' alt='' />
            <p>统一门户 </p>
            <p>统一访问入口，并根据身份匹配门户功能，快捷访问各类应用和数据，可定制门户模板、风格和界面结构</p>
          </div>
          <div className={styles.box}>
            <img src='img/platform.png' alt='' />
            <p>开放平台</p>
            <p>构建平台开放体系，教育局和学校均可接入第三方系统和应用，教育局接入的系统和应用可以向区域内学校分发</p>
          </div>
          <div className={styles.box}>
            <img src='img/application.png' alt='' />
            <p>数据融合</p>
            <p>遵循教育部教育管理信息标准，提供数据共享、开放、融合和大数据分析决策能力，支持标准转换和数据清洗治理</p>
          </div>
        </div>
      </div>
      <div className={styles.functionPoint}>
        <h1>开放式智慧教育/智慧校园应用生态</h1>
        <h1>
          为教育局、学校、师生、家长提供丰富多样的与教育教学深度融合的应用选择，以教育数字化转型助推教育改革和高质量发展
        </h1>
        <div className={styles.wrap}>
          <div className={styles.box}>
            <img src='img/teaching.png' alt='' />
            <p>智慧管理</p>
            <p className={styles.describe}>
              基础信息、组织架构、教师管理、学生管理、校历管理、通知公告、调查问卷、个性化收集表、学年学期、作息时间、场室管理、课程管理、课时安排、课表管理、智能排课
            </p>
          </div>
          <div className={styles.box}>
            <img src='img/research.png' alt='' />
            <p>教学教研</p>
            <p className={styles.describe}>
              教学教研组织协同、配套丰富备课资源和研修课程；集体备课、主题研讨、公开课评审安排、协同、共享，同步提升教师TPACK能力、校本研修能力和课程资源体系建设能力，支撑学科基地、研修共同体、工作坊有效开展业务
            </p>
          </div>
          <div className={styles.box}>
            <img src='img/management.png' alt='' />
            <p>智慧作业</p>
            <p className={styles.describe}>
              基础教育全学段全学科题库、基于题库的个性化校本作业生成、作业打印、作业AI/智慧批阅、作业数据采集、区域作业大数据分析与作业监管、作业报告、作业讲评、错题集、个性化巩固练习题、家校共育
            </p>
          </div>
          <div className={styles.box}>
            <img src='img/administrative.png' alt='' />
            <p>精准测评</p>
            <p className={styles.describe}>
              基于多维细目表的命题指导、网络阅卷成绩管理、题目难度值和学科能力值测定及试卷讲评报告等15种分析报告、教师教学目标达成度测定、学生最近发展区定位和个性化补偿练习题，帮助师生突破题海战术，实现精准教与学
            </p>
          </div>
        </div>
      </div>
      <div className={styles.apply} id='apply'>
        <div>
          <h2>快捷构建区域局校一体化智慧教育平台</h2>
          <button
            onClick={() => {
              goRegister('03');
            }}
          >
            教育局申请入驻 &nbsp; <img src='img/arrow.png' />
          </button>
        </div>
        <div>
          <h2>快捷构建基础教育学校智慧校园平台</h2>
          <button
            onClick={() => {
              goRegister('01');
            }}
          >
            学校申请入驻 &nbsp; <img src='img/arrow.png' />
          </button>
        </div>
      </div>
      <div id="register"></div>
      <div className={styles.process}>
        <div className={styles.tabs}>
          <div className={styles.active}>区域局校一体化智慧教育平台入驻流程</div>
          <div>基础教育学校智慧校园平台入驻流程</div>
        </div>
        <img src='img/process1.png' alt='' />
      </div>
      <FloatButton.BackTop />
    </Layout>
  );
}
