# -*- coding:utf-8 -*-
###################################################################
###   @FilePath: \AceSix.github.io\flask_server.py
###   @Author: AceSix
###   @Date: 2024-05-23 14:23:46
###   @LastEditors: AceSix
###   @LastEditTime: 2024-09-27 22:33:43
###   @Copyright (C) 2024 Brown U. All rights reserved.
###################################################################
# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template

# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)

# The route() function of the Flask class is a decorator, 
# which tells the application which URL should call 
# the associated function.
@app.route('/')
def index():
    return render_template('cv.html')

# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run()