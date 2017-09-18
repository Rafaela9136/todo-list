class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks, include: ['title','description', 'status']
     end

    def create
        task = Task.new(task_params)
        if task.save
            render json: task
        else
            render json: { errors: tasks.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        task = Task.find(params[:id])
        render json: task, include: ['title','description', 'status']
    end

    def update
        task = Task.find(params[:id])
        if task.update_attributes(task_params)
            render json: task
        else
            render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        task = Task.destroy(params[:id])
        render json: task
    end

    private

    def task_params
        params.require(:task).permit(:title, :description, :status)
    end
end