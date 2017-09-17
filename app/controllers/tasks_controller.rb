class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks, include: ['title','description', 'priority']
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
        render json: task, include: ['title','description', 'priority']
    end

    def update
        task = Task.find(params[:id])
        if task.update
            render json: task
        else
            render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        task = Task.find(params[:id])
        render json: task
    end

    private

    def task_params
        params.require(:task).permit(:title, :description, :priority)
    end
end