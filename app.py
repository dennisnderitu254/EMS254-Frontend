from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def index():
    return render_template('base.html')


@app.route('/login')
def login():
    return render_template('auth/login.html')


@app.route('/register')
def register():
    return render_template('auth/register.html')


@app.route('/dashboard')
def dashboard():
    return render_template('auth/dashboard.html')




if __name__ == '__main__':
    app.run(debug=True)