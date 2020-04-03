interface ThirdPartyYoutubeLib {
    listVideos()
    getVideoInfo()
    downloadVideo()
}

class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib {
    listVideos() {

    }

    getVideoInfo() {

    }

    downloadVideo() {

    }
}

class ThidPartyProxy implements ThirdPartyYoutubeLib {
    private service: ThirdPartyYoutubeClass
    constructor(service: ThirdPartyYoutubeLib) {
        this.service = service
    }
    listVideos() {
         // Do Something before 
         this.service.listVideos()
    }

    getVideoInfo() {
        // Do Something before 
        this.service.getVideoInfo()
    }

    downloadVideo() {
        // Do Something before 
        this.service.downloadVideo()
    }
}

// Client code

const partyYoutube = new ThirdPartyYoutubeClass() 
const partyProxy = new ThidPartyProxy(partyYoutube)
partyProxy.listVideos()