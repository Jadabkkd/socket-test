FROM python:alpine3.7
WORKDIR /testcase
COPY . /
RUN pip install -r req.txt
ENV PORT 5000
EXPOSE 5000
ENTRYPOINT [ "python" ]
CMD [ "main.py" ]