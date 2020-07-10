import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './index.scss'
import Router from '../../config/router'
import views from '../../config/'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let getViews = function(list){
    list.forEach((v,i)=>{
        
    })
}
export default () => {
    return (
        <Layout>
            <Sider
                className="site-layout-background"
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    {
                        views.map((v,i)=>{

                        })
                    }
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        nav 4
                     </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background content"  >
                        <Router/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}