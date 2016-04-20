import React from 'react'
import Form from 'antd/lib/form'
const FormItem = Form.Item
import Modal from 'antd/lib/modal'
import Input from 'antd/lib/input'


const CompanyModal = (props) => {

  const {curCompany, provinceList, cityList, countyList } = props;

  const { getFieldProps, getFieldError, isFieldValidating } = props.form;

  const leftItemLayout = {
     labelCol: { span: 7 },
     wrapperCol: { span: 14 }
  }

  const rightItemLayout = {
     labelCol: { span: 5 },
     wrapperCol: { span: 17 }
  }

  let areaOptions =
    props.areaList.map(item => <Option key={item.key}>{item.value}</Option>)
  let registerSourceOptions =
    props.registerSourceList.map(item => <Option key={item.key}>{item.value}</Option>)
  let customerTypeOptions =
    props.customerTypeList.map(item => <Option key={item.key}>{item.value}</Option>)

  let salesmanOptions = curCompany.salesmanList || []
  salesmanOptions = salesmanOptions.map(item => <Option key={item.key} >{item.value}</Option>)

  let customerServiceOptions = curCompany.customServiceList || []
  customerServiceOptions = customerServiceOptions.map(item => <Option key={item.key} >{item.value}</Option>)

  const provinceOptions = provinceList.map(provnice => <Option key={provnice.key}>{provnice.name}</Option>);
  const cityOptions = cityList.map(city => <Option key={city.key}>{city.name}</Option>);
  const countyOptions = countyList.map(county => <Option key={county.key}>{county.name}</Option>);

  const handleOk = () => {
    props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }
      props.onOk(values)
    })
  }

  const areaKeyProps = getFieldProps("areaKey",{
    initialValue: `${curCompany.areaKey}`,
    rules: [
      { required: true, message: '必须选择所属区域' }
    ]
  })

  const customerTypeProps = getFieldProps("customerTypeKey",{
    initialValue: `${curCompany.customerTypeKey}`,
    rules: [
      { required: true, message: '必须选择客户类型' }
    ]
  })

  const isPersonalProps = getFieldProps('isPersonal',{
    initialValue: `${curCompany.isPersonal - 0}`,
    rules: [
      { required: true, message: '必须选择是否为企业' }
    ]
  })

  const compNameprops = getFieldProps('contactName',{initialValue: curCompany.contactName})

  const region = { provinceCode: "",cityCode: "", countyCode: "", ...(curCompany.region||{})};

  return (

    <Modal title='编辑客户' maskClosable={false} width={830}
      visible={props.visible}  onOk={handleOk} onCancel={props.onCancel} >
      <Form horizontal form={props.form}>
            <FormItem  label="详细地址：" {...rightItemLayout}>
              <Input  {...getFieldProps('address',{initialValue: curCompany.address})} placeholder="请输入详细地址"/>
            </FormItem>
            <FormItem label="联系人：" {...rightItemLayout}>
              <Input  {...compNameprops} placeholder="请输入联系人姓名"/>
            </FormItem>
            <FormItem label="联系人手机：" {...rightItemLayout}>
              <Input {...getFieldProps('contactPhone',{
                  initialValue: curCompany.contactPhone,
                  rules: [
                    { pattern: /^1([3-9])\d{9}$/, message: '请输入正确的手机号码'}
                  ]
                })} placeholder="请输入联系人手机" />
            </FormItem>
      </Form>
    </Modal>
  )
}

export default Form.create()(CompanyModal)
