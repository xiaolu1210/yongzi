import matplotlib.pyplot as plt
from wordcloud import WordCloud

# 定义关键词及其权重
data = [
    { 'name': '永昌永子', 'value': 100 },
    { 'name': '围棋', 'value': 80 },
    { 'name': '永昌', 'value': 70 },
    { 'name': '棋子', 'value': 60 },
    { 'name': '甲天下', 'value': 50 },
    { 'name': '质坚色润', 'value': 40 },
    { 'name': '制作方法', 'value': 30 },
    { 'name': '徐霞客', 'value': 20 },
    { 'name': '光润如玉', 'value': 15 },
    { 'name': '列郡第一', 'value': 10 },
    { 'name': '莹润细腻', 'value': 8 },
    { 'name': '南中', 'value': 6 },
    { 'name': '文化瑰宝', 'value': 5 },
    { 'name': '非物质文化遗产', 'value': 4 },
    { 'name': '历史传承', 'value': 3 },
    { 'name': '永子', 'value': 90 },
    { 'name': '云南', 'value': 75 },
    { 'name': '保山', 'value': 70 },
    { 'name': '明代', 'value': 60 },
    { 'name': '清代', 'value': 55 },
    { 'name': '围棋文化', 'value': 45 },
    { 'name': '国宝', 'value': 40 },
    { 'name': '棋中圣品', 'value': 35 },
    { 'name': '文化传承', 'value': 30 },
    { 'name': '传统工艺', 'value': 25 },
    { 'name': '历史记载', 'value': 20 },
    { 'name': '地方特产', 'value': 15 },
    { 'name': '文化价值', 'value': 10 },
    { 'name': '历史文献', 'value': 8 },
    { 'name': '文化遗产', 'value': 5 }
]

# 将数据转换为字典格式
word_freq = {item['name']: item['value'] for item in data}

# 创建词云对象
wordcloud = WordCloud(
    # 指定中文字体路径
    font_path='simhei.ttf',
    width=800,
    height=600,
    background_color='white',
    max_words=50,
    max_font_size=100,
    random_state=42
).generate_from_frequencies(word_freq)

# 显示词云图
plt.figure(figsize=(10, 8))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.title('永昌永子词云图', fontsize=20)

# 保存词云图为图片
output_path = 'images/ciyun.png'
# 保存图片
plt.savefig(output_path, bbox_inches='tight', pad_inches=0)

plt.show()
