from flask import Flask, render_template, request
import requests

app = Flask(__name__)
webhook_url = 'https://hooks.slack.com/services/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'


def slackthat(mail=None, name=None, poste=None, job=None, company=None):
    print 'Mail -> %s' % mail
    if job == 1:
        data = {"text":"@Nico Il est chaud :fire: :fire: :fire: : \nNom = %s\nPoste = %s\nChez = %s\nMail = %s" % (name, poste, company, mail)}
    else:
        data = {"text":"Il est chaud :fire: :fire: :fire: : \nNom = %s\nPoste = %s\nPhone = %s" % (name, poste, mail)}
    r = requests.post(webhook_url, json=data)
    if r.status_code == 200:
        return 'Ok'
    else:
        return 'Ko'



@app.route('/', methods=["GET", "POST"])
def hello():
    if request.method == 'POST':
        print request.form['name']
        if request.form['mail']:
            contact = request.form['mail']
            job = 1
        else:
            contact = request.form['phone']
            job = 2
        print request.form
        ret = slackthat(contact, request.form['name'], request.form['job'], job, request.form['company'])
        print ret
        return render_template('thanks.html', company=request.form['company'])
    else:
        return render_template('job.html', company='Klee Group', linkedin='17552')


if __name__ == '__main__':
    app.run(debug=True)
