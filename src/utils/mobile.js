
import copy from 'copy-to-clipboard';

export const share = (text) => {
    console.log(text)
    if (navigator.share) {
        navigator.share({
            text
        }).catch((e) => {
            copy(text)
        });
    } else {
        copy(text)
    }
}