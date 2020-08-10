/* 
    1.Click Login button
    2.Redirect to SPOTIFY login page
    3.Redirect to home page once logged in
*/

export const authEndpoint = 
"https://accounts.spotify.com/en/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "f8030447d3df4167bc36237fcbcd1d35"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

//#access_token=BQBci-Syf2pKbHwO9UQOVCpxFz3RxqCbv2ghzYTxCxYqGltfO_TucD48LO-y5XoBRDaQmdOzdI7z7cFlEqJSAm22mBM7nid6OeRqapaOd0eM5bTs0_rsWLBRGfVtAVEMjmJGtnILEYRUewSpOGeHGccFGId1WUDRuOJ7p1RjEVZr1z2v&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((a,b)=>{
        let parts = b.split('=');
        a[parts[0]] = decodeURIComponent(parts[1]);

        return a ;
    }, {})
}
