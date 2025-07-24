import { useState } from 'react';
import { View, Text, Progress } from '@tarojs/components';
import './index.scss';

export default function IndexPage() {
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex flex-col min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      {/* <View className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <Text className="text-2xl font-bold text-blue-600">Logo</Text>
        <View className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full">
          <Text className="text-gray-600">🔔</Text>
        </View>
      </View> */}

      {/* 欢迎区域 */}
      <View className="p-6 mb-6 text-white gradient-banner">
        <Text className="mb-2 text-2xl font-bold">Hallo! 👋</Text>
        <View className="mb-4 text-sm opacity-90">
        <Text>继续你的德语学习之旅</Text>
        </View>


        {/* 今日学习目标 */}
        <View className="p-4 rounded-lg backdrop-blur-sm bg-white/20">
          <View className="flex justify-between items-center mb-3">
            <Text className="mb-1 text-sm font-medium">今日学习目标</Text>
            <Text className="font-medium">已完成</Text>
          </View>
          <View className="flex justify-between items-center mb-2">
            <Text>45 分钟</Text>
            <Text>70%</Text>
          </View>
          <Progress
            percent={70}
            strokeWidth={6}
            activeColor="#ffffff"
            backgroundColor="rgba(255, 255, 255, 0.3)"
            borderRadius={3}
          />
        </View>
      </View>

      {/* 学习进度追踪 */}
      <View className="px-6 mb-8">
        <View className="flex justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">学习进度追踪</Text>
          <Text className="font-medium text-blue-500">查看全部</Text>
        </View>

        <View className="flex gap-4">
          {/* 动词变位卡片 */}
          <View className="flex-1 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <View className="flex justify-between items-start mb-3">
              <View className="flex justify-center items-center w-12 h-12 bg-blue-100 rounded-lg">
                <Text className="text-blue-500">📚</Text>
              </View>
              <View className="flex justify-center items-center w-6 h-6 bg-blue-50 rounded-full">
                <Text className="text-xs text-blue-500">★</Text>
              </View>
            </View>
            <Text className="mb-1 font-medium text-gray-800">动词变位</Text>
            <Text className="mb-2 text-sm text-gray-500">初级课程</Text>
            <View className="flex items-center">
              <Text className="font-medium text-yellow-500">4.9</Text>
              <Text className="ml-1 text-xs text-yellow-500">★</Text>
            </View>
          </View>

          {/* 冠词变化卡片 */}
          <View className="flex-1 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <View className="flex justify-between items-start mb-3">
              <View className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-lg">
                <Text className="text-green-500">📖</Text>
              </View>
              <View className="flex justify-center items-center w-6 h-6 bg-green-50 rounded-full">
                <Text className="text-xs text-green-500">📌</Text>
              </View>
            </View>
            <Text className="mb-1 font-medium text-gray-800">冠词变化</Text>
            <Text className="mb-2 text-sm text-gray-500">中级课程</Text>
            <View className="flex items-center">
              <Text className="font-medium text-yellow-500">4.7</Text>
              <Text className="ml-1 text-xs text-yellow-500">★</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 每日练习 */}
      <View className="px-6 mb-6">
        <View className="flex justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">每日练习</Text>
          <Text className="font-medium text-blue-500">更多练习</Text>
        </View>

        <View className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <View className="flex items-center mb-4">
            <View className="flex justify-center items-center mr-3 w-8 h-8 bg-blue-100 rounded-full">
              <Text className="text-xs text-blue-500">✏️</Text>
            </View>
            <Text className="font-medium text-gray-800">填空练习</Text>
          </View>
          <Text className="mb-4 text-gray-600">选择正确的动词变位形式</Text>

          <View className="p-4 mb-4 bg-gray-50 rounded-lg">
            <Text className="text-gray-800">完成句子</Text>
            <View className="flex items-center mt-2">
              <Text className="mr-2 text-gray-800">Ich</Text>
              <View className="flex justify-center items-center w-24 h-10 bg-white rounded-md border border-gray-300"></View>
              <Text className="ml-2 text-gray-800">jeden Tag Deutsch.</Text>
            </View>
          </View>

          <View className="space-y-3">
            <View className="flex justify-center items-center h-12 bg-gray-50 rounded-lg border border-gray-200">
              <Text className="text-gray-800">lerne</Text>
            </View>
            <View className="flex justify-center items-center h-12 bg-gray-50 rounded-lg border border-gray-200">
              <Text className="text-gray-800">lernt</Text>
            </View>
            <View className="flex justify-center items-center h-12 bg-gray-50 rounded-lg border border-gray-200">
              <Text className="text-gray-800">lernen</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 底部数据区域 */}
      <View className="px-6 pb-6 mt-auto">
        <Text className="mb-4 text-xl font-bold text-gray-800">本周数据</Text>
        <View className="flex gap-4">
          <View className="flex-1 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <View className="flex justify-center items-center mb-2 w-10 h-10 bg-blue-100 rounded-full">
              <Text className="text-xs text-blue-500">⏱️</Text>
            </View>
            <Text className="mb-1 text-sm text-gray-500">学习时长</Text>
            <Text className="text-2xl font-bold text-gray-800">3.5 小时</Text>
          </View>
          <View className="flex-1 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <View className="flex justify-center items-center mb-2 w-10 h-10 bg-green-100 rounded-full">
              <Text className="text-xs text-green-500">✓</Text>
            </View>
            <Text className="mb-1 text-sm text-gray-500">完成练习</Text>
            <Text className="text-2xl font-bold text-gray-800">28 题</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
