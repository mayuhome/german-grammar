import { Component, PropsWithChildren } from 'react'
import { View, Text, Button } from '@tarojs/components'

import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      // <View>
      //   <Text>Hello world!</Text>
      // </View>
      <View>
        <Text>Hello world!</Text>
        <Button type='primary'>I need Taro UI</Button>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <Button type='primary'>支持</Button>
        <Text>共建？</Text>
        <Button >来</Button>
      </View>
    )
  }
}
