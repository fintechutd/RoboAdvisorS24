from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

users = {"sample"}

@app.route('/')
def home():
    
    return "Welcome to FinTech UTD's Spring 2024 Project: Robo-Advisor Platform"

#login and register pages
@app.route('/login')
def login():
    render_template("dummy.html")

@app.route('/register')
def register():
    render_template('register.html')

#dashboard and portfolio
@app.route('/dashboard')
def dashboard():
    render_template('dashboard.html')

@app.route('/portfolio')
def data_visualization():
    render_template('') # whatever they named their file

#questionaires
@app.route('/investorgoals')
def goals():
    render_template('/goals-questionaire.html')

@app.route('/risk-questionaire')
def risk_questionaire():
    render_template('/risk-questionaire.html')


if __name__ == '__main__':
    app.run(debug=True)