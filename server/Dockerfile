FROM python:3.9-slim

WORKDIR /app

COPY req.txt ./
RUN pip install -r req.txt

COPY . ./

EXPOSE 8000
CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]