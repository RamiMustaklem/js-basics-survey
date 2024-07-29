import { create as createPub } from "./publication.js";

function printDetails(pub, publisher, ISBN) {
    pub.print();
    console.log({ publisher, ISBN });
}

export function create(title, author, pubDate, publisher, ISBN) {
    var pub = createPub(title, author, pubDate);

    var publicAPI = {
        print() {
            printDetails(pub, publisher, ISBN);
        }
    };

    return publicAPI;
}
