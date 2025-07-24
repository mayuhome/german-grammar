import { useState, useEffect } from 'react';
import './index.scss';
import { View, Text } from '@tarojs/components';

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View className="page-profile">
        <Text className="loading">加载中...</Text>
      </View>
    );
  }

  return (
    <View className="page-profile">
      <Text>我的页面</Text>
      <Text>这里是个人中心！</Text>
    </View>
  );
}