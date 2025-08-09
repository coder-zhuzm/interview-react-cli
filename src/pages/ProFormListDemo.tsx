import React from 'react'
import { ProCard, ProForm, ProFormList, ProFormSelect } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';
const ProFormListDemo = () => {
  return (
    <ProCard title="ProFormListDemo" headerBordered bordered >
      <ProForm
        layout='horizontal'
        onFinish={async (values) => {
          console.log('提交的值', values);
          return true;
        }}
      >
        <ProFormList
          name="users"
          initialValue={[
            {
              user: 'user2',
            },
          ]}
          creatorButtonProps={{
            position: 'bottom',
            creatorButtonText: '再建一行',
          }}
          copyIconProps={false}
          actionRender={(field, action, defaultActionDom = []) => {
            return defaultActionDom.map((node: any) => {
              if (!React.isValidElement(node)) return node;
              
              // 判断是否为删除按钮
              const keyStr = (node as any).key?.toString?.() || '';
              let onlyChild: any = null;
              try {
                onlyChild = React.Children.only((node as any)?.props?.children);
              } catch (e) {
                return node;
              }
              
              const isDelete = keyStr.includes('delete') || 
                onlyChild?.props?.className?.includes('action-remove');
              
              if (!isDelete || typeof onlyChild?.props?.onClick !== 'function') return node;
              
              // 用 Popconfirm 包裹删除按钮
              const inertChild = React.cloneElement(onlyChild, { onClick: undefined });
              return (
                <Popconfirm
                  title="确定要删除吗？"
                  onConfirm={onlyChild.props.onClick}
                  okText="确定"
                  cancelText="取消"
                  key="delete"
                >
                  <span style={{ cursor: 'pointer' }}>{inertChild}</span>
                </Popconfirm>
              );
            });
          }}
        >
          <ProFormSelect
            key="user"
            name="user"
            label="用户"
            width="md"
            options={[
              {
                value: 'user1',
                label: '用户1',
              },
              {
                value: 'user2',
                label: '用户2',
              },
              {
                value: 'user3',
                label: '用户3',
              },
            ]}

          />
        </ProFormList>
      </ProForm>
    </ProCard >
  )
}

export default ProFormListDemo