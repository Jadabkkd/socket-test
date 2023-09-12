FROM python:3.11-alpine3.15

WORKDIR /gof-prestim

COPY req.txt req.txt
RUN pip3 install -r req.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]