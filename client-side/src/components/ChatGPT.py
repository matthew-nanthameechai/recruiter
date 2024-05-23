from openai import OpenAI
import json
import os
from flask import Flask, request, jsonify

app = Flask(__name__)

client = OpenAI(
    api_key = os.environ['CHATGPT_KEY']
)

# Sample company info and Job Description (replace these with actual content)
job_description = "We are looking for a skilled software developer proficient in Python, with experience in web development and project management..."
company_info = "This is a tech company"

# Function to generate a set of questions based on CV and job description
def generate_questions(cv_data):
    prompt = f"Imagine you are a hiring manager for a company with the following background information : \n\n{company_info}\n\n. You are looking to hire a new employee, based on the following job description: \n\n{job_description}.\n\n You are looking at the suitability of a candidate for the job, and that candidate has the following CV information: \n\n{cv_data}\n\n. What I want you to do is write 5 questions which a hiring manager would ask to further query the candidate. The focus of the questions should take into account a few different aspects. They should aim to be as unbiased as possible. They should enquire firstly about any required skills in the job description not mentioned in the CV. If key skills are mentioned only briefly, they should enquire further about the candidates past experience in using those skills. If there is no past experience, ask about how the candidate might go about upskilling in those areas. Beyond that, the questions should also aim to ask the candidate about the company values and how the candidate sees themselves aligning with those values."
    
    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant who generates interview questions."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        model="gpt-3.5-turbo"
    )
    answer = response.choices[0].message.content.strip()
    return answer

def filter_questions(question):
    filter_prompt = f"I have a long list of questions to ask a candidate in a recruiting process. I'd like to whittle the list down to a smaller subset of 5 questions, which summarises the most reoccuring themes in the lines of questioning. The skills-based questions should focus on the most frequently mentioned skills and areas of knowledge from the long list. Avoid asking about too many things at once. Here are the questions:\n\n{question}\n\n. Just provide a list and nothing else."

    filtered_response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant who to finds the best questions for an interview."
            },
            {
                "role": "user",
                "content": filter_prompt
            }
        ],
        model="gpt-3.5-turbo"
    )
    filtered_answer = filtered_response.choices[0].message.content.strip()
    return filtered_answer



# Generate and store 3 sets of 5 questions
def generate_all_questions(cv_data):
    all_questions = []
    for i in range(3):
        questions = generate_questions(cv_data)
        all_questions.append(f"Set {i+1} of questions:\n{questions}\n" + "="*40 + "\n")

    # Save questions to a json file
    with open('questions.json', 'w') as f:
        for set_of_questions in all_questions:
            f.write(set_of_questions + "\n")

    # Load questions from a json file
    with open('questions.json', 'r') as f:
        loaded_questions = f.read()

    # Print the loaded questions
    return loaded_questions


@app.route('/api', methods=['POST'])
def homeRunner():
    cv_data = request.data

    question = generate_all_questions(cv_data)
    filtered_questions = filter_questions(question)
    return filtered_questions


if __name__ == '__main__':
    app.run()


# Generate and print 3 sets of 5 questions
 #for i in range(3):
 #   print(f"Set {i+1} of questions:")
  #  questions = generate_questions(cv, job_description)
  #  print(questions)
  #  print("\n" + "="*40 + "\n")
