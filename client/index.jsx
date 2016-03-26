import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/lib/index.css'
import Form from 'antd/lib/form'
const FormItem = Form.Item
import Input from 'antd/lib/input'

class Reports extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

       const emailProps = getFieldProps('email',{
         //validateFirst: true,
         validate: [{
             rules: [
               { required: true, message: '必须填写邮箱地址' },
             ],
             trigger: 'onBlur',
           }, {
             rules: [
               { type: 'email', message: '请输入正确的邮箱地址' },
             ],
             trigger: ['onBlur','onChange'],
           }]
       });

        return (
          <div style={{width:200}}>
          <Form horizontal form={this.props.form}>
            <FormItem label="邮箱：" >
              <Input {...emailProps} placeholder="请输入邮箱" />
            </FormItem>
          </Form>
          </div>
        )
    }
}

const Demo = Form.create()(Reports)


ReactDOM.render(<Demo/>, document.getElementById('app'))
