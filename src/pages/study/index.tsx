import { useState, useEffect } from 'react';
import './index.scss';
import { View,Text } from '@tarojs/components';

export default function StudyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View className="page-study">
        <Text className="loading">加载中...</Text>
      </View>
    );
  }

  return (
    <View className="page-study">
      <Text>学习页面</Text>
      <Text>欢迎来到德语学习中心！</Text>
      <Text>这里是德语学习中心！</Text>
    </View>
  );
}