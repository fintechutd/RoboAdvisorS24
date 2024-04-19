from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder='../frontend/templates', static_url_path='/static')

users = {"sample"}

@app.route('/')
def home():
    return "Welcome to FinTech UTD's Spring 2024 Project: Robo-Advisor Platform"

#login and register pages
@app.route('/loginPage')
def login():
    return render_template("loginPage/login.html")
    

@app.route('/register')
def register():
    return render_template('register.html')

#dashboard and portfolio
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/portfolio')
def data_visualization():
    return render_template('') # whatever they named their file

#questionaires
@app.route('/investorgoals')
def goals():
    return render_template('/goals-questionaire.html')

@app.route('/risk-questionaire')
def risk_questionaire():
    return render_template('/risk-questionaire.html')


if __name__ == '__main__':
    app.run(debug=True)