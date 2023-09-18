from flask import Flask, render_template, url_for

app = Flask(__name__)
app = Flask(__name__, template_folder='templates')


@app.route('/')
@app.route('/home')
def home():
    return render_template('base.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/d')
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/transactions')
def transactions():
    return render_template('transactions.html')

@app.route('/wallet')
def wallet():
    return render_template('wallet.html')

@app.route('/ac')
@app.route('/accountsettings')
def accountsettings():
    return render_template('accountsettings.html')



if __name__ == '__main__':
    app.run(debug=True)
