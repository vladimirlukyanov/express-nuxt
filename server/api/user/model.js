import mongoose, { Schema } from 'mongoose'

const roles = [ 'USER', 'ADMIN' ]

const userSchema = new Schema({
  name: {
    first_name: {
      type: String,
      trim: true
    },
    middle_name: {
      type: String,
      trim: true
    },
    last_name: {
      type: String,
      trim: true
    }
  },
  email: {
    type: String,
    unique: true
  },
  role: {
    type: String,
    enum: roles,
    set: (v) => v.toUpperCase()
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

userSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      name: this.name,
      role: this.role,
      email: this.email
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  },

  admin () {
    const view = {
      id: this.id,
      first_name: this.name.first_name,
      middle_name: this.name.middle_name,
      last_name: this.name.last_name,
      role: this.role,
      email: this.email
    }

    return view
  }
}

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
