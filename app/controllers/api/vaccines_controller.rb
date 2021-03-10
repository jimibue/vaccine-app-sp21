class Api::VaccinesController < ApplicationController
  before_action :set_bug

  

  #   axios.get('http://localhost:3001/api/bugs/2)
  def index
   render json: @bug.vaccines
  end

  #   axios.post('http://localhost:3001/api/bugs/2/vaccines',bug)
  def create
   # doesn't add bug_id for us
   # vaccine = Vaccine.new.new(vaccine_params)
   # add bug_id for us
   vaccine = @bug.vaccines.new(vaccine_params)
   if(vaccine.save)
     render json: vaccine
   else
     render json: {errors: vaccine.errors}, status: :unprocessable_entity
   end
  end


#   axios.put('http://localhost:3001/api/bugs/2/vaccines', bug)
  def update
    vaccine = @bug.vaccines.find(params[:id])
    if(vaccine.update(vaccine_params))
      render json: vaccine
    else
      render json: {errors: vaccine.errors}, status: :unprocessable_entity
    end
   end

#   axios.delete('http://localhost:3001/api/bugs/2/vaccines/5)
   def destroy
    vaccine = @bug.vaccines.find(params[:id])
    vaccine.destroy
    render json: vaccine
   end

  private

  def set_bug
   @bug = Bug.find(params[:bug_id])
  end

  def vaccine_params
   params.require(:vaccine).permit(:effectiveness, :maker, :name)
  end
end
