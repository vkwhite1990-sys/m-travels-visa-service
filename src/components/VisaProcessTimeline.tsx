import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface VisaProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  checklist: string[];
  tips: string[];
}

interface VisaProcessTimelineProps {
  steps: VisaProcessStep[];
  currentStep?: number;
}

const VisaProcessTimeline: React.FC<VisaProcessTimelineProps> = ({ steps, currentStep = 0 }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600" />

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.step} className="relative md:pl-24">
              {/* Timeline Marker */}
              <div
                className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white transition-all ${
                  isCompleted
                    ? 'bg-green-500'
                    : isCurrent
                    ? 'bg-primary-600 ring-4 ring-primary-200'
                    : 'bg-gray-300'
                }`}
              >
                {isCompleted ? <CheckCircle className="w-8 h-8" /> : step.step}
              </div>

              {/* Content */}
              <div
                className={`p-6 rounded-lg border-2 transition-all ${
                  isCurrent
                    ? 'border-primary-500 bg-primary-50'
                    : isCompleted
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step {step.step}: {step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Duration */}
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Duration: {step.duration}</span>
                </div>

                {/* Checklist */}
                {step.checklist.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Checklist:</p>
                    <ul className="space-y-2">
                      {step.checklist.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                {step.tips.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Pro Tips:</p>
                    <div className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start space-x-2 text-sm bg-yellow-50 p-3 rounded border border-yellow-200">
                          <AlertCircle className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
                          <span className="text-yellow-800">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisaProcessTimeline;
