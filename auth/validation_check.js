// @ts-nocheck
const jwt = require("jsonwebtoken");

module.exports = {
    validateToken: (req, res) => {
        let token = req.get("authorization");

        if (token) {
            // Remove Bearer from string
            token = token.slice(7);
            jwt.verify(token, '#&%^ghjTmchd*&*slkjoljJID54259GFMHN*jkdgbuyn9779)()*&bjjbjk,nshlmkhd%$$4165BYj76JNhgjk', (err, decoded) => {
                if (err) {
                    return res.json({
                        success: 100,
                        message: "Invalid Token"
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    }
};
