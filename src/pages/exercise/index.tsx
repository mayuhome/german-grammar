import { useState, useEffect } from 'react';
import './index.scss';
import { View, Text } from '@tarojs/components';


export default function ExercisePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View className="page-exercise">
        <Text className="loading">加载中...</Text>
      </View>
    );
  }

  return (
    <View className="page-exercise">
      <Text>练习页面</Text>
      <Text>这里是德语练习中心！</Text>
    </View>
  );
}