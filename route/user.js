import {Router} from "express";

const router = Router();

router.get("/info", function (req, res) {
    console.log(1)
    let a = {
        code: 20000,
        data: {
            info: {
                roles: ['admin'],
                introduction: 'I am a super administrator',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                name: 'Super Admin'
            }
        }
    }
    res.end(JSON.stringify(a))
})
export default router;