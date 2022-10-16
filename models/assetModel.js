const mongooose = require('mongoose');

const assetSchema = new mongooose.Schema({
    // Your code goes here

    propertyType: { required: true, type: String },
    negotable: { type: String },
    price: { type: String },
    ownership: { type: String },
    propertyAge: { type: String },
    propertyApproved: { type: String },
    propertyAge: { type: String },
    propertyDescription: { type: String },
    bankLoan: { type: String },
    length: { required: true, type: String },
    breath: { required: true, type: String },
    totalArea: { required: true, type: String },
    areaUnit: { type: String },
    noOfBHK: { type: String },
    noOfFloor: { type: String },
    attached: { type: String },
    western: { type: String },
    furnished: { type: String },
    carParking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String },

    name: { type: String },
    mobile: { required: true, type: String },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: String },
    ppdPackage: { type: String },

    email: { required: true, type: String },
    city: { type: String },
    area: { type: String },
    pincode: { type: String },
    address: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    PPDId: { required: true, type: String },
    Views: { required: true, type: String },
    DaysLeft: { required: true, type: String },
    Sold: { required: true, type: String }

}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Asset = mongooose.model('assets', assetSchema);

module.exports = Asset;