from flask import Flask ,render_template

app = Flask(__name__)

@app.route('/')
def technology():
    # 使用 render_template 渲染 HTML 文件
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
