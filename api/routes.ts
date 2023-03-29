import express from "express";
import {getWordCloud} from "./wordCloudController";

const router = express.Router({ mergeParams: true });

router.route('/word_cloud').get(getWordCloud);

export default router;
