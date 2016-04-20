import React from 'react'
import CompanyModal from './CompanyModal'
export default class Company extends React.Component {
    render() {
        const curCompany = {salesmanList:[],customServiceList:[]}
        return <CompanyModal visible={true}
          curCompany={curCompany}
          areaList={[]}
          registerSourceList={[]}
          customerTypeList={[]}
          provinceList={[]}
          cityList={[]}
          countyList={[]}
          />
    }
}
