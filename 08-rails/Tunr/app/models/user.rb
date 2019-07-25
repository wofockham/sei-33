# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  has_many :mixtapes
end
