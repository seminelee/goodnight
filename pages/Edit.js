import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from '../styles/stats.style'
import DatePicker from 'react-native-datepicker'
import { getDate } from '../utils/index'
import iconClose from '../img/close.png'
import iconCheck from '../img/check.png'

const datePickerProps = {
  style: styles.listItemPicker,
  confirmBtnText: "确定",
  cancelBtnText: "取消",
  showIcon: false,
  customStyles: {
    dateInput: {
      height: 24
    }
  }
}

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDate: props.item[0],
      editTime: props.item[1]
    }
  }
  render() {
    return (
      <View style={styles.listItem}>
        {/* 编辑输入框 */}
        <DatePicker
          date={this.state.editDate}
          mode="date"
          format="YYYY-MM-DD"
          maxDate={getDate(new Date())}
          placeholder="选择日期"
          {...datePickerProps}
          onDateChange={(text) => {
            this.setState({ editDate: text })
          }}
        />
        <DatePicker
          date={this.state.editTime}
          mode="time"
          placeholder="选择时间"
          {...datePickerProps}
          onDateChange={(text) => {
            this.setState({ editTime: text })
          }}
        />
        <View style={styles.listItemActions}>
          <TouchableOpacity onPress={() => this.submit()}>
            <Image style={styles.listItemAction} source={iconCheck} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.cancel}>
            <Image style={styles.listItemAction} source={iconClose} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  // 提交编辑
  submit() {
    this.props.submit(this.state.editDate, this.state.editTime)
  }
}
