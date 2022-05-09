import {
    Router
} from "express";
import request from "request";
const router = Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

import user from "./user.js";

router.use("/user", user);
router.get("/login", async function (req, res) {
    console.log(req.query)
    let {
        appid,
        secret,
    } = req.query
    // let token = await getToken(appid, secret)

    let token = {"code":200,"data":{"token":"56_5SfhW-kl8jarsh2IvtnKtU7M4qS-yLwXgoBRJXDiXHOaX_ARqNTVIpLPAF8HNnTx7FtczAu7ncYcQBufI39Lmv0JHMlnb1VD9lEozrws7DjMmz9ulpawQA4VFTXWnCmFJZuXmqAeqBG38C_qFOXdADAQZI","access_token":"56_5SfhW-kl8jarsh2IvtnKtU7M4qS-yLwXgoBRJXDiXHOaX_ARqNTVIpLPAF8HNnTx7FtczAu7ncYcQBufI39Lmv0JHMlnb1VD9lEozrws7DjMmz9ulpawQA4VFTXWnCmFJZuXmqAeqBG38C_qFOXdADAQZI","expires_in":7200}}
    if(token.code == 200){
        res.header("x-token","123")
    }
    res.send(token)
    res.end()
});

function getToken(appid, secret) {
    return new Promise((resolve,rejects) => {
        var options = {
            'method': 'GET',
            'url': 'https://api.weixin.qq.com/cgi-bin/token',
            "qs": {
                appid,
                secret,
                grant_type: 'client_credential'
            },
            'headers': {}
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            var result = JSON.parse(response.body);
            if("access_token" in result){
                let res = {
                    code:200,
                    data:{token:result.access_token,...result}
                }
                resolve(res)
            }else{
                let res = {
                    code:1001,
                    data:result
                }
                rejects(res)
            }
        })
    })
}


export default router;