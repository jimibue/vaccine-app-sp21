class Api::BugsController < ApplicationController

    def index
      render json: Bug.all
    end


    # res = axios.get('/api/bugs/1')
    # setBug(res.data.bug)
    def show
        bug = Bug.find(params[:id])
        render json: {bug: bug, vaccines: bug.vaccines} #res.data.bug, res.data.vaccines, 
        # render json: bug #res.data
    end


    def create
      bug = Bug.new(bug_params)
      if (bug.save)
        render json: bug
      else
        render json: {errors: bug.errors}
      end
    end

    def update
        bug = Bug.find(params[:id])
        if (bug.update(bug_params))
          render json: bug
        else
          render json: {errors: bug.errors}
        end
      end

    def destroy
       render json: Bug.find(params[:id]).destroy
    end

    private
    
    def bug_params
      params.require(:bug).permit(:name)
    end
end
