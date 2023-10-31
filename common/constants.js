const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = DATASET_DIR + "/json";
constants.IMG_DIR = DATASET_DIR + "/img";
constants.SAMPLES = DATASET_DIR + "/samples.json";

if (typeof module != "undefined")
{
    module.exports = constants;
}