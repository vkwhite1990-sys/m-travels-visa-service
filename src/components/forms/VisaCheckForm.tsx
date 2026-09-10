'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { visaCheckSchema, VisaCheckFormData } from '@/utils/validation';
import { VISA_COUNTRIES, NATIONALITIES, TRAVEL_PURPOSES } from '@/utils/constants';
import { apiClient } from '@/utils/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const VisaCheckForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisaCheckFormData>({
    resolver: zodResolver(visaCheckSchema),
  });

  const onSubmit = async (data: VisaCheckFormData) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post('/api/visa-check', data);
      localStorage.setItem('visaCheckResult', JSON.stringify(response));
      router.push('/visa-check/results');
      toast.success('Visa check completed!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to check visa requirements.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
        <select
          {...register('destination')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Select a country...</option>
          {VISA_COUNTRIES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Nationality</label>
        <select
          {...register('nationality')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Select your nationality...</option>
          {NATIONALITIES.map((nationality) => (
            <option key={nationality} value={nationality}>
              {nationality}
            </option>
          ))}
        </select>
        {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Passport Type</label>
        <select
          {...register('passportType')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="regular">Regular</option>
          <option value="diplomatic">Diplomatic</option>
          <option value="official">Official</option>
        </select>
        {errors.passportType && <p className="text-red-500 text-sm mt-1">{errors.passportType.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Travel Purpose</label>
        <select
          {...register('travelPurpose')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Select purpose...</option>
          {TRAVEL_PURPOSES.map((purpose) => (
            <option key={purpose.value} value={purpose.value}>
              {purpose.label}
            </option>
          ))}
        </select>
        {errors.travelPurpose && <p className="text-red-500 text-sm mt-1">{errors.travelPurpose.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Planned Travel Date</label>
        <input
          {...register('travelDate', { valueAsDate: true })}
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
        {errors.travelDate && <p className="text-red-500 text-sm mt-1">{errors.travelDate.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Checking Visa Requirements...' : 'Check Visa Requirements'}
      </button>
    </form>
  );
};

export default VisaCheckForm;
