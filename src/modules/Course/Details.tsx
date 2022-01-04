// eslint-disable-next-line
// @ts-nocheck
import React from 'react';
import {
  Row,
  Col,
  Image,
  Descriptions,
  Typography,
  Divider,
  Card,
  Anchor,
} from 'antd';
import { CourseCatalogue } from './CourseCatalogue';

const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;

class Details extends React.Component {
  // 保存数据的地方
  data = {
    userInfo: {
      name: '计算机程序的构造和解释',
      img:
        'https://pic1.zhimg.com/a9a329eec0251d7a69f71db309453feb_1200x500.jpg',
      lecturer: '独不迁',
      telephone: 'dubuqian@outlook.com',
      propaedeutics: '无',
      textbox:
        'The Structure and Interpretation of Computer Programs, 2nd Edition, MIT Press',
    },
    courseIntroductionL: `倘若大家对 <Text strong>SICP</Text> 有所耳闻，也一定对它 “魔法书” 的称号有所了解，书中将编写程序当作是自己写作魔力去控制计算机中的精灵。
    从这本书的封面，到作者的引言，都充满了生趣——是的，我使用了生趣一词。可能在诸多的误传中，<Text strong>SICP</Text> 被描述成了一部极难理解的作品，
    但这种观点毫无疑问是错误的。在之前的 MIT，这本书不过是<Text strong>大一电气工程和计算机科学专业的必修课。</Text>作者笔调轻盈，语言幽默典雅，
    是<Text strong>不可多得的佳品。</Text>它更是可以大幅提高我们对大型项目的掌握能力，让我们面对卷帙浩繁的程序知道如何下手理解；
    对我们编写大型项目也是大有裨益；随着对程序设计语言的深入挖掘，我们对程序设计语言的理解也会深入恳綮。`,
    learnMethod:
      '很多人觉得，我将视频看过一遍，便能完全掌握其中内容。但事实上，复习才是学习的重中之重，因此我推荐大家看完课程录像后，能够根据笔记尝试复盘，若是能在脑中对知识的结构有足够清晰的架构，那才算真正完全掌握',
    lanternSlide: {
      address:
        'https://dubuqian.cn/courses/static/slides/cst1b10/Lecture-1-Introduction.pdf',
      name:
        'Lecture 1: Introduction & A Swift and Brutal Introduction to Racket  (English)',
    },
    work: '第一单元小结 抄写10遍',
    classVideo: '老师上课讲的内容，自己脑中回顾一遍',
    catalogue: [
      {
        title: '出版者的话',
        key: '出版者的话',
      },
      {
        title: '专家指导委员会',
        key: '专家指导委员会',
      },
      {
        title: '序',
        key: '序',
      },
      {
        title: '第2版前言',
        key: '第2版前言',
      },
      {
        title: '第1版前言',
        key: '第1版前言',
      },
      {
        title: '致谢',
        key: '致谢',
      },
      {
        title: '第1章 构造过程抽象',
        key: '第1章 构造过程抽象',
        children: [
          {
            title: '1.1 程序设计的基本元素',
            key: '1.1 程序设计的基本元素',
          },
          {
            title: '1.2 过程与它们所产生的计算',
            key: '1.2 过程与它们所产生的计算',
          },
          {
            title: '1.3 用高阶函数做抽象',
            key: '1.3 用高阶函数做抽象',
          },
        ],
      },
      {
        title: '第2章 构造数据现象',
        key: '第2章 构造数据现象',
        children: [
          {
            title: '2.1 数据抽象导引',
            key: '2.1 数据抽象导引',
          },
          {
            title: '2.2 层次性数据和闭包性质',
            key: '2.2 层次性数据和闭包性质',
          },
          {
            title: '2.3 符号数据',
            key: '2.3 符号数据',
          },
          {
            title: '2.4 抽象数据的多重表示',
            key: '2.4 抽象数据的多重表示',
          },
          {
            title: '2.5 带有通用型操作的系统',
            key: '2.5 带有通用型操作的系统',
          },
        ],
      },
      {
        title: '第3章 模块化、对象和状态',
        key: '第3章 模块化、对象和状态',
        children: [
          {
            title: '3.1 赋值和局部状态',
            key: '3.1 赋值和局部状态',
          },
          {
            title: '3.2 求值的环境模型',
            key: '3.2 求值的环境模型',
          },
          {
            title: '3.3 用变动数据做模拟',
            key: '3.3 用变动数据做模拟',
          },
          {
            title: '3.4 并发：时间是一个本质问题',
            key: '3.4 并发：时间是一个本质问题',
          },
          {
            title: '3.5 流',
            key: '3.5 流',
          },
        ],
      },
      {
        title: '第4章 元语言抽象',
        key: '第4章 元语言抽象',
        children: [
          {
            title: '4.1 元循环求值器',
            key: '4.1 元循环求值器',
          },
          {
            title: '4.2 Scheme的变形——惰性求值',
            key: '4.2 Scheme的变形——惰性求值',
          },
          {
            title: '4.3 Scheme的变形——非确定性计算',
            key: '4.3 Scheme的变形——非确定性计算',
          },
          {
            title: '4.4 逻辑程序设计',
            key: '4.4 逻辑程序设计',
          },
        ],
      },
      {
        title: '第5章 寄存器机器里的计算',
        key: '5',
        children: [
          {
            title: '5.1 寄存器机器的设计',
            key: '5.1 寄存器机器的设计',
          },
          {
            title: '5.2 一个寄存器机器模拟器',
            key: '5.2 一个寄存器机器模拟器',
          },
          {
            title: '5.3 存储分配和废料收集',
            key: '5.3 存储分配和废料收集',
          },
          {
            title: '5.4 显式控制的求值器',
            key: '5.4 显式控制的求值器',
          },
          {
            title: '5.5 编译',
            key: '5.5 编译',
          },
        ],
      },
      {
        title: '参考文献',
        key: '参考文献',
      },
      {
        title: '练习表',
        key: '练习表',
      },
      {
        title: '索引',
        key: '索引',
      },
    ],
  };
  render() {
    return (
      <Card style={{ margin: '24px 0' }}>
        {/* 作品介绍 */}
        <Row align="middle">
          <Col span={4}>
            <Image
              width={160}
              height={200}
              preview={false}
              src={this.data.userInfo.img}
            />
          </Col>
          <Col span={20}>
            <Descriptions title="基本信息" column={1}>
              <Descriptions.Item label="名称">
                {this.data.userInfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="授课人">
                {this.data.userInfo.lecturer}
              </Descriptions.Item>
              <Descriptions.Item label="邮箱">
                {this.data.userInfo.telephone}
              </Descriptions.Item>
              <Descriptions.Item label="前置需求">
                {this.data.userInfo.propaedeutics}
              </Descriptions.Item>
              <Descriptions.Item label="教材">
                {this.data.userInfo.textbox}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        {/* 课程简介  学习方法 */}
        <Row>
          <Col span={24}>
            <Typography>
              <Divider />

              <Title level={2}>课程简介</Title>
              <Paragraph>{this.data.courseIntroductionL}</Paragraph>

              <Title level={2}>学习方法</Title>
              <Paragraph>{this.data.learnMethod}</Paragraph>
            </Typography>
          </Col>
        </Row>
        <br />

        {/* 课程目录 */}
        <Row>
          <Col span={24}>
            <Title level={2}>课程目录</Title>
            <CourseCatalogue catelogue={this.data.catalogue} />
          </Col>
        </Row>

        <Divider />

        {/* 幻灯片 */}
        <Row>
          <Col span={24}>
            <Title level={2}>幻灯片</Title>
            <Anchor>
              <Link
                href={this.data.lanternSlide.address}
                title={this.data.lanternSlide.name}
              />
            </Anchor>
          </Col>
        </Row>

        <br />
        {/* 作业 */}
        <Row>
          <Col span={24}>
            <Title level={2}>作业</Title>
            {this.data.work}
          </Col>
        </Row>

        <br />
        {/* 课程录像 */}
        <Row>
          <Col span={24}>
            <Title level={2}>课程录像</Title>
            {this.data.classVideo}
          </Col>
        </Row>
      </Card>
    );
  }
}
export { Details };
