interface Notifier { 
    sendMessage(): void 
}

class BaseNotifier implements Notifier {
    constructor() {

    }
    sendMessage() {
        console.log('send message')
    }
}

class NotifierSlack implements Notifier { 
    private notifier: Notifier
    constructor(notifier: Notifier) {
        this.notifier = notifier
    }
    sendMessage() {
        this.notifier.sendMessage()
    }
}

class NotifierSlackAndFacebook extends NotifierSlack {
    sendMessage() {
        super.sendMessage()
        console.log('send message facebook')
    }
}

const baseNotifier = new BaseNotifier()
const slackNotifier = new NotifierSlack(baseNotifier)
const slackFacebookNotifier = new NotifierSlackAndFacebook(baseNotifier)
slackFacebookNotifier.sendMessage()