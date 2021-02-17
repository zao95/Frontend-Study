// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    setTimeout(() => {
        return res.status(200).json({ contents: req.query.input })
    }, 1500)
}