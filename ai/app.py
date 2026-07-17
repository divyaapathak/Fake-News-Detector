from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle


app = Flask(__name__)

CORS(app)



# =========================
# LOAD AI MODEL
# =========================

model = pickle.load(open("model.pkl", "rb"))

vectorizer = pickle.load(open("vectorizer.pkl", "rb"))




# =========================
# TEMP DATABASE
# =========================

users = [

    {
        "email": "test@gmail.com",
        "password": "123456"
    }

]


history = []




# =========================
# HOME
# =========================

@app.route("/")
def home():

    return "Fake News Detector AI Server Running"





# =========================
# REGISTER
# =========================

@app.route("/api/auth/register", methods=["POST"])
def register():


    data = request.json


    email = data.get("email")

    password = data.get("password")



    if not email or not password:

        return jsonify({
            "message":"Email and password required"
        }),400




    for user in users:

        if user["email"] == email:

            return jsonify({
                "message":"User already exists"
            }),400





    users.append({

        "email":email,

        "password":password

    })



    return jsonify({

        "message":"Register successful"

    })







# =========================
# LOGIN
# =========================

@app.route("/api/auth/login", methods=["POST"])
def login():


    data = request.json


    print("LOGIN DATA:",data)



    email = data.get("email")

    password = data.get("password")



    for user in users:


        if user["email"] == email and user["password"] == password:


            return jsonify({

                "token":"demo-token",

                "user":{

                    "email":email

                },

                "message":"Login successful"

            })





    return jsonify({

        "message":"Invalid credentials"

    }),401







# =========================
# AI PREDICTION
# =========================

@app.route("/api/predict", methods=["POST"])
def predict():



    data = request.json


    news = data.get("news","")



    if not news:


        return jsonify({

            "message":"News required"

        }),400





    vector = vectorizer.transform([news])



    prediction = model.predict(vector)[0]




    try:

        probability = model.predict_proba(vector)[0]

        confidence = round(max(probability)*100)


    except:

        confidence = 80






    if str(prediction).lower() in [

        "fake",

        "fake news",

        "1",

        "false"

    ]:


        result="Fake News"


    else:


        result="Real News"






    result_data={


        "news":news,

        "prediction":result,

        "confidence":confidence

    }




    history.append(result_data)




    return jsonify(result_data)









# =========================
# HISTORY
# =========================

@app.route("/api/history", methods=["GET"])
def get_history():


    return jsonify(history)








# =========================
# DASHBOARD
# =========================

@app.route("/api/dashboard", methods=["GET"])
def dashboard():


    total = len(history)


    real = 0

    fake = 0

    confidence_total = 0




    for item in history:



        if item["prediction"] == "Real News":

            real += 1

        else:

            fake += 1



        confidence_total += int(item["confidence"])





    if total > 0:

        avg_confidence = round(

            confidence_total / total

        )

    else:

        avg_confidence = 0






    return jsonify({

        "totalNews": total,

        "realNews": real,

        "fakeNews": fake,

        "avgConfidence": avg_confidence

    })








# =========================
# RUN SERVER
# =========================

if __name__ == "__main__":


    app.run(

        host="0.0.0.0",

        port=5001,

        debug=False

    )