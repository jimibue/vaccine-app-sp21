class Vaccine < ApplicationRecord
  validates :name, presence: true
  belongs_to :bug
end
