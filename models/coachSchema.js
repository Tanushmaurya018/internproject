const mongoose = require("mongoose");


const genderEnum = ['MALE', 'FEMALE', 'OTHERS'];
const languageEnum = ['English', 'Spanish', 'Chinese'];
const familiarityToTeachEnum = ['In Pool', 'Pool Side'];
const swimExpertiseEnum = ['Babies', 'Todler',"Children","Adults"];
const typeOfTrainingEnum = ['Private', 'Semi Private',"Group"];
const trainedAgedGroup = ['Babies', 'Todler',"Children","Adults"];


const coachSchema = new mongoose.Schema({
  registrationDetails: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accepted:{
      TOS:{
        type:Boolean,
        required:true,
      },
      privacyPolicy:{
        type:Boolean,
        required:true,
      }
    },

  },
  profileDetails:{
    phoneNumber:{
      type:Number,
      required:true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: genderEnum,
      default: 'OTHERS',
    },
    language: {
      type: String,
      enum: languageEnum,
      default: 'English',
    },
    addressLin1: {
      type: String,
      required: true,
    },
    addressLin2: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    addBio: {
      type: String,
      required: false,
    },
    achievements: {
      type: String,
      requird:true,
    },
    familiarityToTeach: {
      type: String,
      enum: familiarityToTeachEnum,
      default: 'Pool Side',
    },
    swimExpertise: {
      type: String,
      enum: swimExpertiseEnum,
      default: 'Adults',
    },
    prefCountry: {
      type: String,
      required: true,
    },
  },
  workExperience1: [workExperienceSchema],
  workExperience2: [workExperienceSchema],
  reference1: [refernceSchema],
  reference2: [refernceSchema],
  qualificationDetails: [qualificationSchema],
  bankDetails: [bankDetailsSchema],
});
const workExperienceSchema = new mongoose.Schema({
  workExp: {
    type: Number,
    required: true,
  },
  timePeriod: {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  companyName: {
    type: String,
    required: true,
  },
  typeOfTraining: {
    type: String,
    
  },
  trainedAgeGroup: {
    type: String,
  },

  reasonTOLeave: {
    type: String,
    required: true,
  },
});
const refernceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
});
const bankDetailsSchema = new mongoose.Schema({
  holderName: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  sortCode: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  nationalInsuranceNumber: {
    type: Number,
    required: true,
  },
});
const qualificationSchema = new mongoose.Schema({
  babiesQualification: {
    STA: {
      type: String,
      required: true,
    },
    ASA: {
      type: String,
      required: true,
    },
  },
  swimmingCoachlvl1: {
    STA: {
      type: String,
      required: true,
    },
    ASA: {
      type: String,
      required: true,
    },
  },
  swimmingCoachlvl2: {
    STA: {
      type: String,
      required: true,
    },
    ASA: {
      type: String,
      required: true,
    },
  },
  insuranceDetails: {
    insuranceNumber: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Number,
      required: true,
    },
  },
  disclosureAndBarringCertificate: {
    certificateNumber: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Number,
      required: true,
    },
  },
  firstAidQualification: {
    STA: {
      type: String,
      required: true,
    },
    ASA: {
      type: String,
      required: true,
    },
  },
  ukCitizen: {
    isCitizen: {
      type: Boolean,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
    rightToWorkShareCode: {
      type: String,
      required: true,
    },
  },
});
const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
