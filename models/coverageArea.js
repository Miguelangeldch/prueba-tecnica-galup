import mongoose from 'mongoose';

const CoverageSchema = new mongoose.Schema(
 {
    coverageType: {
        type: String
    },
    coverageName: {
        type: String
    },
    vectorLayer: {
        type: String
    },
    radius: {
        type: Number
    },
    position:[[Number, Number]],
    color: {
        type: String
    }
 },
)

export default mongoose.model('CoverageArea', CoverageSchema)