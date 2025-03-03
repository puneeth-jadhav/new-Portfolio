FROM python:3.10
WORKDIR /home/puneeth/Work/New_codebenders/rest_api_server/projects_folder/6/backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
