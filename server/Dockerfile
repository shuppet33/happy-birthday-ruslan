FROM python:3.9-slim

WORKDIR /server

COPY req.txt ./
RUN pip install -r req.txt

copy . ./
EXPOSE 8000
CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]