import type { Meta, StoryObj } from '@storybook/react';

import ArrayFields from '@/components/Form/FieldDisplay/src/ArrayFields';

const meta = {
  title: 'FieldDisplay/ArrayFields',
  component: ArrayFields,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ArrayFields>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'dogs',
      type: 'array',
      label: '狗狗列表',
      required: true,
      fieldConfigs: [
        {
          name: 'title',
          type: 'text',
          label: '標題',
          required: true,
          defaultValue: '吉娃娃',
        },
        {
          name: 'description',
          type: 'textarea',
          label: '描述',
          required: true,
        },
      ],
    },
    currentValue: [
      {
        title: '拉布拉多犬',
        description:
          '一種起源於加拿大紐芬蘭與拉布拉多省的中大型尋回犬，因為智商高且個性溫和、活潑，較沒有攻擊性，非常適合被選作寵物犬、導盲犬或其他工作犬，與金毛尋回犬、哈士奇並列三大低攻擊性犬種。拉布拉多是美國犬業俱樂部中目前登記數量最多的品種。',
      },
      {
        title: '貴賓犬',
        description:
          '一種迷人的小型犬種，以其優雅、活潑和聰明而聞名。它們的毛髮柔軟、捲曲，有著迷人的外表和獨特的氣質，常常被視為高貴的伴侶犬種。貴賓犬通常非常親人，喜歡與家人親近，也非常適合與小孩相處。它們具有高度的智慧，容易訓練，因此常常在狗展上表現出色。無論是作為家庭寵物還是展示犬，貴賓犬都以其溫和、友好和愉悅的個性贏得了眾多犬迷的喜愛。',
      },
    ],
  },
};
